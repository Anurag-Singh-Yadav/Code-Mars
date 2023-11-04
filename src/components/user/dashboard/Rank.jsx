
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

function Rank({rank,totalUser}) {
  return (
    <div className="px-2">
              <div className="text-center font-bold text-xs sm:text-2xl bg-blue-200 md:px-4 rounded-full my-2">
                Global ranking
              </div>
              <div className="w-[60%] flex justify-center mx-auto my-4">
                <CircularProgressbar
                  className="font-bold rounded-full global-rank"
                  text={`${rank}/${
                    totalUser
                  }`}
                  styles={{
                    path: {
                      stroke: "#FFD700",
                    },
                    text: {
                      fill: "#000000",
                    },
                  }}
                />
              </div>
              <div className="text-center font-bold text-xs sm:text-2xl bg-blue-200 py-2 rounded-full">
                Top: <span className="italic">{(rank/totalUser*100).toFixed(2)}%</span>
              </div>
</div>
  )
}

export default Rank
