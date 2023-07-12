
function onDragStart(event) {
    event.dataTransfer.setData(
        'text/plain',
        JSON.stringify({
            "elementId": event.target.id
        })
    );

    event.currentTarget.style.backgroundColor = '#b134eb';
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const content = event.dataTransfer.getData('text');
    if (event.target.className == 'ticket') {
        console.log("ERROR " + content)
    }

    if (event.target.className != 'ticket') {
        let dataContent = JSON.parse(content)
        console.log(dataContent)

        const ticket = document.getElementById(
            dataContent["elementId"]
        );

        const queue = event.target;
        queue.appendChild(ticket);
    }

    event.dataTransfer.clearData();
}
