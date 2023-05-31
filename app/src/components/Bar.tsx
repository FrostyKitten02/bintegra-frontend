

function constructUnitString(max: number, current: number, unit?: string): string | null {
    const base = current + "/" + max;
    if (unit) {
        return base + " " + unit;
    }

    return base;
}

export default function Bar(
    {
        max,
        current,
        unit,
        width,
        height,
        title,
    }: {
        max: number,
        current: number,
        unit?: string,
        width: number,
        height: number,
        title?: string
    }) {

    const percentage = Math.round((current / max) * 100);
    const percentageHeight = percentage + "%";

    return(
        <div>
            {title==null?null:
                <div className="flex justify-center items-center font-bold">
                    {title}
                </div>
            }

            <div style={{height: height}} className="flex justify-center items-center font-bold">
                <div className="h-full bg-gray-200 rounded-lg dark:bg-blue-700 relative" style={{width: width}}>
                    <div className={`bg-blue-600 rounded-b-lg absolute bottom-0 flex justify-center items-center`} style={{height: percentageHeight, width: width}}>
                        {width<50?null:
                            <p className="font-bold">
                                {percentage}%
                            </p>
                        }
                    </div>
                </div>
            </div>
            {width<50?null:
                <div className="flex justify-center items-center font-bold">
                    {constructUnitString(max, current, unit)}
                </div>
            }
        </div>
    )
}