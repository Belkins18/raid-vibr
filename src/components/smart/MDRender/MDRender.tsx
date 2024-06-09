import { HTMLAttributes } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface IMdRenderProps extends HTMLAttributes<HTMLTableElement> {
  markdown: string
}

export const MDRender = ({ markdown }: IMdRenderProps) => {
  return <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
}
