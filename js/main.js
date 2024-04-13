let calButtons = document.querySelector('.calButtons')
let task = document.querySelector('.task')
let prob = document.querySelector('.prob')
let delet = document.querySelector('.delet')

calButtons['division'].style.backgroundColor = '#6344D4'
calButtons['multiplication'].style.backgroundColor = '#6344D4'
calButtons['minus'].style.backgroundColor = '#6344D4'
calButtons['plus'].style.backgroundColor = '#6344D4'

let s = ''
calButtons['one'].onclick = (el) => {
    el.preventDefault()
    s += 1
    task.innerHTML = s
}

calButtons['two'].onclick = (el) => {
    el.preventDefault()
    s += 2
    task.innerHTML = s
}

calButtons['three'].onclick = (el) => {
    el.preventDefault()
    s += 3
    task.innerHTML = s
}

calButtons['four'].onclick = (el) => {
    el.preventDefault()
    s += 4
    task.innerHTML = s
}

calButtons['five'].onclick = (el) => {
    el.preventDefault()
    s += 5
    task.innerHTML = s
}

calButtons['six'].onclick = (el) => {
    el.preventDefault()
    s += 6
    task.innerHTML = s
}

calButtons['seven'].onclick = (el) => {
    el.preventDefault()
    s += 7
    task.innerHTML = s
}

calButtons['eight'].onclick = (el) => {
    el.preventDefault()
    s += 8
    task.innerHTML = s
}

calButtons['nine'].onclick = (el) => {
    el.preventDefault()
    s += 9
    task.innerHTML = s
}

calButtons['zero'].onclick = (el) => {
    el.preventDefault()
    s += 0
    task.innerHTML = s
}

calButtons['minus'].onclick = (el) => {
    el.preventDefault()
    s += ' - '
    task.innerHTML = s
}

calButtons['plus'].onclick = (el) => {
    el.preventDefault()
    s += ' + '
    task.innerHTML = s
}

calButtons['multiplication'].onclick = (el) => {
    el.preventDefault()
    s += ' * '
    task.innerHTML = s
}


calButtons['division'].onclick = (el) => {
    el.preventDefault()
    s += ' / '
    task.innerHTML = s
}

calButtons['percent'].onclick = (el) => {
    el.preventDefault()
    s += '%'
    task.innerHTML = s
}



calButtons['dot'].onclick = (el) => {
    el.preventDefault()
    s += '.'
    task.innerHTML = s
}
calButtons['percent'].onclick = (el) => {
    el.preventDefault()
    s += ' % '
    task.innerHTML = s
}
calButtons['reset'].onclick = (el) => {
    el.preventDefault()
    s = ''
    prob.innerHTML = ''
    task.innerHTML = s
}
calButtons['plusMinus'].onclick = (el) => {
    el.preventDefault()
    s = s.split(' ')
    let rs = ''
    for(let i = 0; i < s.length; i++){
        if(i == s.length - 1){
            rs += (s[i] * -1)
        } else{
            rs += s[i] +' '
        }
    }
    s = rs
    task.innerHTML = s
}
let t = 0
calButtons['scope'].onclick = (el) => {
    el.preventDefault()
    t++
    if(t == 1){
        s += '('
    } else{
        s += ')'
        t = 0
    }
    task.innerHTML = s
}

delet.onclick = () => {
    s = s.slice(0, -1, '')
    task.innerHTML = s
}



calButtons['equals'].onclick = (el) => {
    el.preventDefault()
    prob.innerHTML = (eval(s))
}