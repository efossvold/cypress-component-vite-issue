import React from "react";
import { helloWorld } from "@foo/utils";

const Footer: React.FC = () => (
  <div className="mt-4">
    {/* hello world */}
    {helloWorld()}
  </div>
);

export default Footer;
