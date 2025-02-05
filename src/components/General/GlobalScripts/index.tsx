interface GlobalScriptsProps {
  script: string;
}

const isValidString = (param: unknown): param is string =>
  typeof param === "string" && param !== "";

const GlobalScripts: React.FC<GlobalScriptsProps> = ({ script }) => {
  if (isValidString(script)) {
    return (
      <div
        id="global-scripts"
        dangerouslySetInnerHTML={{ __html: script }}
      ></div>
    );
  }

  return null;
};

export default GlobalScripts;
