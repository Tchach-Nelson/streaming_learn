const socket = io('http://192.168.118.18:3031/'); //connection au socket creer par le serveur
const videoGrid = document.getElementById('video-grid'); 
//connection peerJS local port 3030
const myPeer = new Peer(undefined, {
    host: '/',
    port: '3030'
});

const myVideo = document.createElement('video');
myVideo.muted = true;

navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: true
}).then(stream => {
    addVideoStream(myVideo, stream);

    socket.on('user-connected', userId => {
        connectToNewUser(userId, stream);
        console.log('user connected:', userId);
    });

    myPeer.on('call', call => {
        call.answer(stream);
    });

    socket.on('user-disconnected', userId => {
        if (peers[userId]) {
            peers[userId].close();
        }
    });

    socket.emit('join-room', ROOM_ID, myPeer.id);
});

myPeer.on('open', id => {
    console.log('Connected with ID:', id);
});

function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream);
    
    //pour le prof on crée pas de video et pour l'etu on connecte sa video
    const video = document.createElement('video'); 

    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream);
        // addVideoStream(myVideo, userVideoStream);
    });

    call.on('close', () => {
        video.remove();
    });

    peers[userId] = call;
}

function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    videoGrid.append(video);
}