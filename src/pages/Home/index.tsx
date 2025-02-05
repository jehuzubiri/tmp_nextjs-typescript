import { useEffect } from "react";
import { Metadata } from "next";
import { AppConfig } from "@/constant/App.const";
import { GeneralServices } from "@/services/General.services";
import useCounterHook from "@/hooks/Counter.hook";

export const metadata: Metadata = {
  title: AppConfig.metaTitle || "Terragon FE",
  description: AppConfig.metaDescription,
};

const HomePage: React.FC<{ data: string }> = ({ data }) => {
  //@DESC: function starts here....
  const { handleDecrement, handleIncrement } = useCounterHook();

  const getThis = async (path: string) => {
    const {} = await GeneralServices({
      apiType: "pokemon",
      method: "get",
      path,
    });
  };

  useEffect(() => {
    //@DESC: sample path: 'pokemon' | 'pokemon/ditto' | 'pokemon-species/aegislash'
    getThis("pokemon/ditto");
  }, []);

  return (
    <section>
      <h1>Home Page</h1>
      <p>{`${data} ${1}`}</p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </section>
  );
};

export default HomePage;
