import React from 'react'
import assets from '../../../assets/imageExport'
function BottomFooter() {
  return (
      <div className=" bg-navcolor">
        <div
          className="flex pb-5 px-3 m-auto pt-5 
          border-t border-gray-500 text-gray-400 text-sm 
          flex-col md:flex-row max-w-6xl justify-between"
        >
          <div className="mt-2">© 2023 Company, Inc. All Rights Reserved.</div>
          <div className="flex items-center justify-center gap-8">
            <a href="#" target="_blank">
              <img src={assets.linkedin}></img>
            </a>
            <a href="#" target="_blank">
              <img src={assets.youTubeLogo}></img>
            </a>
            <a>
            <img src={assets.twitterLogo}></img>
            </a>
            <a>
            <img src={assets.facebook}></img>
            </a>
          </div>
        </div>
      </div>
  )
}

export default BottomFooter
