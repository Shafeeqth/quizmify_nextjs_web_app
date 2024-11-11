"use client"

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import D3WordCloud from "react-d3-cloud";

type Props = {
  formatedTopics: {text: string, value: number}[];
};


const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};
const CustomWordCloud = ({formatedTopics}: Props) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
     
     <D3WordCloud
        data={formatedTopics}
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === "dark" ? "white" : "black"}
        onWordClick={(e, d) => {
          router.push("/quiz?topic=" + d.text);
        }}
      />
    </> 
  );
};

export default CustomWordCloud;
