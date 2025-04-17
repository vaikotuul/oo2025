export function averageSpeed(firstSpeed, secondSpeed){
    const timefor1KM= 1/firstSpeed; // v =s*t => t = s/v
    const timefor2KM = 1/secondSpeed;

    const totalTime = timefor1KM + timefor2KM; //aeg kokku 2km läbimiseks

    const averageSpeed = 2/totalTime; // v= s*t keskmine kiirus 2km lõigul

    return averageSpeed;
}

export function averageSpeed2(numbers:number[]){
    const times:number[] = []
    let totalTime = 0
    for(let i=0; i<times.length; i++){
        let time = 1/numbers[i]
        totalTime += time
    }
    const averageSpeed = numbers.length/totalTime
    return averageSpeed
}