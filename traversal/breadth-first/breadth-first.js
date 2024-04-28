const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }

function breadthFirst(start){
    let queue = [start]
    let visited = new Set([start])

    while (queue.length){
        let curr = queue.shift()

        console.log(curr)

        let neighbors = adjList[curr]
        neighbors.forEach(el => {
            if (!visited.has(el)) {
                visited.add(el)
                queue.push(el)
            }
        })
    }
}

breadthFirst(3)
