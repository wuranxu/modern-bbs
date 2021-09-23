import React, {useState} from 'react';
import zhHans from "bytemd/lib/locales/zh_Hans.json"; //默认是英文版，我们替换成中文的
import gfm from "@bytemd/plugin-gfm";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight-ssr";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import "bytemd/dist/index.min.css";
import "highlight.js/styles/vs.css";
import {Editor} from "@bytemd/react";


export default props => {
  const [value, setValue] = useState('');
  const plugins = [gfm(), gemoji(), highlight(), mediumZoom()];

  return (
    <Editor
      locale={zhHans}
      value={value}
      plugins={plugins}  //markdown中用到的插件，如表格、数学公式、流程图
      onChange={(v) => {
        setValue(v);
      }}
      uploadImages={async (files) => {
        console.log("files", files);
        return [
          {
            title: files.map((i) => i.name),
            url: "http",
          },
        ];
      }}
    />);
};
