import React from "react";
import { helloWorld } from "@foo/utils";

const Footer: React.FC = () => (
  <footer className="mt-4">
    {/* hello world */}
    {helloWorld()}
  </footer>
);

export default Footer;
