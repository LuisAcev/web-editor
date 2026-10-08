"use client";
import { useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useTiptapEditor } from "@/hooks/use-tiptap-editor"
import { Button } from "@/components/tiptap-ui-primitive/button"
import { SaveIcon } from "@/components/tiptap-icons/save-icon"

export function SaveButton({ editor: providedEditor, onSave, ...buttonProps }) {
  const { editor } = useTiptapEditor(providedEditor)
  const { t } = useTranslation()

  const handleClick = useCallback(() => {
    if (!editor || !onSave) return
    onSave(editor.getHTML())
  }, [editor, onSave])

  return (
    <Button
      type="button"
      variant="ghost"
      role="button"
      tabIndex={-1}
      disabled={!onSave}
      data-disabled={!onSave}
      aria-label={t("toolbar.save")}
      tooltip={t("toolbar.save")}
      {...buttonProps}
      onClick={handleClick}
    >
      <SaveIcon className="tiptap-button-icon" />
    </Button>
  )
}
