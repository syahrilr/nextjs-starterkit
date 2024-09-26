"use client";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ApiAlertProps {
  description: string;
}

const CopySelector = ({ description }: ApiAlertProps) => {
  const { toast } = useToast();

  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast({
      title: "Success",
      description: "Copied to clipboard",
      variant: "success",
    });
  };
  return (
      <pre className="mt-2 overflow-x-auto rounded bg-gray-100 p-2 dark:bg-gray-700 w-full flex items-center justify-between overflow-hidden">
        <code>{description}</code>
        <Button variant="outline" size="icon" onClick={onCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </pre>
  );
};

export default CopySelector;
