function ownrender(customele , container){
    const domele = document.createElement(customele.type);
    domele.innerHTML = customele.children;
    domele.setAttribute('href' , customele.props.href);
    domele.setAttribute('target' , customele.props.target);
    container.appendChild(domele)
}   



neweleme = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',

    },
    children:'Click me to visit google.com'
}
const rootelem = document.getElementById('root');
ownrender(neweleme ,rootelem)