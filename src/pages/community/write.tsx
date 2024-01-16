import Layout from "@/components/Layout";
import Button from "@/components/button";
import TextArea from "@/components/textarea";
import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
      <form className="p-4 space-y-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default Write;