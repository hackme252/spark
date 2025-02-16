import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ClockOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.96721C7.56361 3.96721 3.96721 7.56361 3.96721 12C3.96721 16.4364 7.56361 20.0328 12 20.0328C16.4364 20.0328 20.0328 16.4364 20.0328 12C20.0328 7.56361 16.4364 3.96721 12 3.96721ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 7.54853C12.5434 7.54853 12.9838 7.9889 12.9838 8.53213V11.6358L16.2699 15.4654C16.6237 15.8776 16.5763 16.4986 16.164 16.8524C15.7518 17.2061 15.1308 17.1587 14.777 16.7464L11.2537 12.6405C11.1007 12.4622 11.0166 12.235 11.0166 12V8.53213C11.0166 7.9889 11.4569 7.54853 12.0002 7.54853Z"/>',
      }}
    />
  )
)

ClockOutline.displayName = 'ClockOutline'

export const tags = ['ClockOutline', '']
