export const Shimmer = () => {
    return (
      <>
        <div className="animate-pulse p-2 m-2 flex flex-wrap justify-center">
          {Array(10).fill("").map((e, index) => {
              return (
                <div className="w-60 h-80 p-2 m-7 rounded-2xl bg-stone-100  flex flex-wrap" key={index} >
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-40 bg-slate-200 rounded"></div>
                    {/* <div className="h-8 bg-slate-200 rounded"></div> */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  };
  