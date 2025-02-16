import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CheckFill = React.forwardRef(
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
          '<path d="M8.91958 19.3664C8.73748 19.3664 8.56045 19.332 8.38847 19.2632C8.21649 19.1944 8.05969 19.0912 7.91806 18.9536L2.42489 13.6173C2.14163 13.3422 2 13.008 2 12.615C2 12.2219 2.14163 11.8877 2.42489 11.6126C2.70814 11.3374 3.04704 11.1998 3.44158 11.1998C3.83612 11.1998 4.18513 11.3374 4.48862 11.6126L8.91958 15.917L19.5417 5.62767C19.825 5.35251 20.1639 5.21001 20.5584 5.20018C20.953 5.19036 21.2919 5.33285 21.5751 5.62767C21.8584 5.90284 22 6.23697 22 6.63007C22 7.02316 21.8584 7.3573 21.5751 7.63246L9.92109 18.9536C9.77946 19.0912 9.62266 19.1944 9.45068 19.2632C9.27871 19.332 9.10167 19.3664 8.91958 19.3664Z"/>',
      }}
    />
  )
)

CheckFill.displayName = 'CheckFill'

export const tags = ['CheckFill', '']
