import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlagOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.97961 2H18.187C18.5696 2 18.9172 2.22734 19.077 2.58214C19.2369 2.93694 19.1798 3.35428 18.9308 3.65079L15.4081 7.84615L18.9308 12.0415C19.1798 12.338 19.2369 12.7554 19.077 13.1102C18.9172 13.465 18.5696 13.6923 18.187 13.6923H6.95922V21C6.95922 21.5523 6.52063 22 5.97961 22C5.43859 22 5 21.5523 5 21V3C5 2.44772 5.43859 2 5.97961 2ZM6.95922 11.6923H16.0572L13.3741 8.49694C13.0597 8.12246 13.0597 7.56985 13.3741 7.19536L16.0572 4H6.95922V11.6923Z"/>',
      }}
    />
  )
)

FlagOutline.displayName = 'FlagOutline'

export const tags = ['FlagOutline', '']
