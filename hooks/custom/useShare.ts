import { useEffect } from "react";

interface ShareContent {
  title: string;
  text: string;
  url: string;
  files?: File[];
}

interface ShareHookResult {
  isWebShareSupported: boolean;
  shareContent: (content: ShareContent) => Promise<void>;
}

const useShare = (): ShareHookResult => {
  const isWebShareSupported =
    typeof navigator !== "undefined" && navigator.share !== undefined;

  const shareContent = async (content: ShareContent): Promise<void> => {
    try {
      if (typeof navigator !== "undefined" && navigator.share !== undefined) {
        await navigator.share(content);
      }
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  };

  useEffect(() => {
    if (!isWebShareSupported) {
      console.warn("Web Share API is not supported in this browser.");
    }
  }, [isWebShareSupported]);

  return { isWebShareSupported, shareContent };
};

export default useShare;
