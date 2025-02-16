import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ValidFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12.1997C22 17.7226 17.5228 22.1997 12 22.1997C6.47715 22.1997 2 17.7226 2 12.1997C2 6.67686 6.47715 2.19971 12 2.19971C17.5228 2.19971 22 6.67686 22 12.1997ZM17.8382 9.32875C18.1952 8.90735 18.143 8.27634 17.7216 7.91935C17.3002 7.56237 16.6692 7.61458 16.3122 8.03598L10.6716 14.6943L8.42882 12.145C8.06402 11.7303 7.43214 11.6899 7.01749 12.0547C6.60283 12.4195 6.56241 13.0514 6.92721 13.466L9.39128 16.2669C9.55283 16.4539 9.75361 16.603 9.97939 16.7037C10.2057 16.8047 10.4514 16.8544 10.6991 16.8493C10.9426 16.8457 11.1827 16.7902 11.4031 16.6864C11.6252 16.5818 11.8223 16.4306 11.9808 16.243L17.8382 9.32875Z"/>',
      }}
    />
  )
)

ValidFill.displayName = 'ValidFill'

export const tags = ['ValidFill', '']
