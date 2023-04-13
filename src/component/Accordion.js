import '../css/accordion.css'

export function AccordionItem({children, ...props}){

  return (
    <div className="x-accordion-item" {...props}>
      {children}
    </div>
  )
}

export function AccordionHeader({title="Accortion Item", subTitle, icon, ...props}){

  return (
    <div className="x-accordion-header" {...props}>
      <span className='x-accordion-header-title'>{title}</span>
      {
        !!subTitle && <span className='x-accordion-header-sub-title'>{subTitle}</span>
      }
      {icon}
    </div>
  )
}

export function AccordionContent({children, ...props}){

  return (
    <div className="x-accordion-content" {...props}>
      {children}
    </div>
  )
}

export function Accordion({children, ...props}){

  return (
    <div className="x-accordion" {...props}>
      {children}
    </div>
  )
}