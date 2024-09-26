"use client";

import { useRef } from "react";

import { EditorProvider } from "@tiptap/react";
import { useServerAction } from "zsa-react";

import { useToast } from "@/hooks/use-toast";

import { LoaderButton } from "../../../components/ui/loader-button";
import { updateProfileBioAction } from "./action";

export function EditBioForm({ bio }: { bio: string }) {
  const { execute, isPending } = useServerAction(updateProfileBioAction);
  const htmlRef = useRef<string>(bio);
  const { toast } = useToast();

  return (
    <div className="w-full space-y-4">
      <EditorProvider
        onUpdate={({ editor }) => {
          htmlRef.current = editor.getHTML();
        }}
        content={bio}
        editable={true}
        immediatelyRender={false}
      ></EditorProvider>

      <div className="flex justify-end">
        <LoaderButton
          onClick={() => {
            execute({ bio: htmlRef.current }).then(([, err]) => {
              if (err) {
                toast({
                  title: "Uh-oh!",
                  variant: "destructive",
                  description: "Your profile bio failed to update.",
                });
              } else {
                toast({
                  title: "Success!",
                  description: "Your profile bio has been updated.",
                });
              }
            });
          }}
          isLoading={isPending}
          className="self-end"
        >
          Save Changes
        </LoaderButton>
      </div>
    </div>
  );
}
