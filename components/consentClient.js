export const consentClient = (pageBasedArg) => {
  const saveConsent = ({ key, value }) => {
    const iframe = document.getElementById("consentHub");
    iframe.contentWindow.postMessage({
      action: "save",
      key,
      value,
    });
  };

  const getConsent = ({ key }) => {
    const iframe = document.getElementById("consentHub");
    iframe.contentWindow.postMessage({
      action: "get",
      key,
    });
  };

  const clearConsent = () => {
    const iframe = document.getElementById("consentHub");
    iframe.contentWindow.postMessage({
      action: "clear",
    });
  };
  return (
    <div>
      <button
        onClick={() => saveConsent({ key: "123", value: "hilary_rules" })}
      >
        Save something
      </button>
      <br />
      <button onClick={() => getConsent({ key: "123" })}>Get something</button>
      <br />
      <button onClick={() => clearConsent()}>Clear something</button>
      <br />
      <iframe
        style={{ display: "none" }}
        id="consentHub"
        srcDoc={`<script type="text/javascript">
            const messageHandler = (event) => {
              const { action, key, value } = event.data;
              if (action == 'save') {
                console.log('save', value);
                window.localStorage.setItem(key, JSON.stringify(value));
              } else if (action == 'get') {
                const storedValue = JSON.parse(window.localStorage.getItem(key));
                event.source.postMessage({
                  action: 'returnData',
                  key,
                  value: storedValue
                }, '*');
              } else if (action == 'clear') {
                window.localStorage.clear();
              } 
            }; 
            window.addEventListener("message", messageHandler, false);
        </script>`}
      />
    </div>
  );
};
