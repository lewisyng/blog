export const Richtext = ({ content }: { content: any }) => {
  return content[0].body.map((item: any, idx: number) => (
    <div key={idx} className={'my-4'}>
      {item.children.map((child: any, idx: number) => (
        <div key={idx}>{child.text}</div>
      ))}
    </div>
  ))
}
