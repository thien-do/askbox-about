"use client";

import { ReactElement, RefObject, useRef } from "react";

function Button(props: {
  text: string;
  icon: string;
  onClick: () => void;
}): ReactElement {
  const { text, icon, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "bg-rose-500 px-5 py-2 rounded-full",
        "text-white font-medium",
        "cursor-pointer",
        "flex items-center gap-2",
        "shadow-lg shadow-rose-500/25",
      ].join(" ")}
    >
      {text}
      <span className="text-2xl font-normal">{icon}</span>
    </button>
  );
}

function Dialog(props: {
  children: ReactElement;
  dialogRef: RefObject<HTMLDialogElement | null>;
}): ReactElement {
  const { children, dialogRef } = props;

  function close() {
    const dialog = dialogRef.current;
    if (dialog === null) throw new Error("Dialog not attached");
    dialog.close();
  }

  const button = (
    <div
      className={[
        "absolute bottom-6 left-1/2 -translate-x-1/2",
      ].join(" ")}
    >
      <Button
        text="Close"
        icon="⊗"
        onClick={close}
      />
    </div>
  )

  const article = (
    <article
      className={[
        // Avoid video controls on top of the close button
        "isolate",
        "mx-auto px-6 pt-9",
        // Avoid close button hiding article content
        "pb-24",
        // Similar to root -> <article />
        "prose prose-stone prose-lg dark:prose-invert",
      ].join(" ")}
    >
      <h1>Build note</h1>
      {children}
    </article>
  )

  return (
    <dialog
      ref={dialogRef}
      onClick={(event) => {
        const dialog = dialogRef.current;
        if (dialog === null) throw new Error("Dialog not attached");
        if (event.target === dialog) dialog.close();
      }}
      className={[
        "m-auto shadow-xl",
        "w-full h-10/12",
        "backdrop:bg-stone-500/50",
        // Reset default styles
        "max-w-full max-h-full",
        // Similar to root -> <body />
        "bg-stone-100 dark:bg-stone-800",
      ].join(" ")}
    >
      <div
        className={[
          "h-full overflow-auto",
        ].join(" ")}
      >
        {article}
      </div>
      {button}
    </dialog>
  )
}

export function ReleaseBuild(props: {
  children: ReactElement;
}): ReactElement {
  const { children } = props;

  const ref = useRef<HTMLDialogElement>(null);

  function show() {
    const dialog = ref.current;
    if (dialog === null) throw new Error("Dialog not attached");
    dialog.showModal();
  }

  return (
    <>
      <div className="flex justify-center">
        <Button
          text="View build note"
          icon="⊕"
          onClick={show}
        />
      </div>
      <Dialog dialogRef={ref}>
        {children}
      </Dialog>
    </>
  )
}