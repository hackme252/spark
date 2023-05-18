import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const BoxFill = React.forwardRef(
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
          '<path d="M2 9.8947V19.7683C2 20.4132 2.24295 20.9797 2.72885 21.4677 3.12798 21.8686 3.77874 22.1997 4.42082 22.1997H19.5792C20.2213 22.1997 20.7852 21.9557 21.2712 21.4677 21.6703 21.0668 22 20.4132 22 19.7683V9.8947H2ZM14.0087 16.7792H17.4707C18.0347 16.7792 18.4338 17.1801 18.4338 17.7465 18.4338 18.313 18.0347 18.7139 17.4707 18.7139H14.0087C13.4447 18.7139 13.0456 18.313 13.0456 17.7465 13.0456 17.1801 13.4447 16.7792 14.0087 16.7792ZM10.9458 2.19971H7.39696C6.75488 2.27814 6.02603 2.44372 5.46204 2.84459 4.89805 3.16703 4.49892 3.65504 4.1692 4.29992L2.39046 7.66376H10.9458V2.19971ZM19.7354 4.30864C19.4143 3.66376 18.9284 3.17574 18.3644 2.76616 17.8004 2.36528 17.0716 2.19971 16.4295 2.19971H12.8807V7.66376H21.4447L19.7354 4.29992V4.30864Z"/>',
      }}
    />
  )
)

BoxFill.displayName = 'BoxFill'

export const tags = ['BoxFill', '']
