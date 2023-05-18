import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const MegaphoneFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 4.63347C21.9998 4.37314 21.9339 4.1169 21.8083 3.88777C21.6908 3.65519 21.5161 3.45522 21.3 3.30601C21.083 3.15864 20.8353 3.06064 20.575 3.01919C20.3123 2.97931 20.0437 3.0018 19.7916 3.08476L3.5833 8.67318C3.12891 8.82967 2.73171 9.11476 2.44164 9.4926C2.1564 9.88475 2.0021 10.3543 2 10.8365V12.3606C2.01608 12.8278 2.17588 13.2792 2.45832 13.6553C2.74144 14.033 3.13333 14.3184 3.5833 14.4747L5.46664 15.122V16.6379C5.46977 17.5328 5.73207 18.4084 6.22282 19.1622C6.71357 19.9159 7.41246 20.5166 8.23774 20.894C9.06303 21.2713 9.98056 21.4098 10.883 21.2931C11.7853 21.1764 12.6353 20.8095 13.3333 20.2351C13.964 19.7172 14.4441 19.0443 14.725 18.2849L19.7833 20.0221C20.0354 20.105 20.3039 20.1275 20.5666 20.0877C20.827 20.0462 21.0746 19.9482 21.2916 19.8009C21.5078 19.6517 21.6825 19.4517 21.8 19.2191C21.9256 18.9899 21.9915 18.7337 21.9917 18.4734V4.64167L22 4.63347ZM12.0833 18.752C11.6705 19.0938 11.1669 19.3126 10.6319 19.3826C10.097 19.4526 9.55276 19.3709 9.0634 19.1471C8.57403 18.9232 8.15985 18.5666 7.8696 18.1192C7.57934 17.6718 7.42508 17.1522 7.42496 16.6215V15.8021L12.8916 17.6786C12.7153 18.0959 12.4378 18.4644 12.0833 18.752Z"/>',
      }}
    />
  )
)

MegaphoneFill.displayName = 'MegaphoneFill'

export const tags = ['MegaphoneFill', '']
