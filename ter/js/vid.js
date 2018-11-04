resetVid = function() { 
    //get the Video div and replace with the original video source code 
    var videoPanel = document.getElementById('vid'); 
    videoPanel.innerHTML = '<iframe src="https://vk.com/video_ext.php?oid=-45789158&id=171725724&hash=431ca21a762a3cc9" width="732" height="732" frameborder="0" allowfullscreen></iframe>';  
} 

PlayVid = function() { 
    //get the Video div and play new video on button click 
    var videoPanel = document.getElementById('vid'); 
    videoPanel.innerHTML = '<iframe src="https://vk.com/video_ext.php?oid=-45789158&id=171725724&hash=431ca21a762a3cc9" width="732" height="732" frameborder="0" allowfullscreen></iframe>'; 
    //replace video after 8.5 seconds 
} 
PlayVid2 = function() { 
    //get the Video div and play new video on button click 
    var videoPanel = document.getElementById('vid'); 
    videoPanel.innerHTML = '<iframe src="https://vk.com/video_ext.php?oid=394429441&id=456239058&hash=104637acd6d79515" width="732" height="732" frameborder="0" allowfullscreen></iframe>'; 

    //replace video after 8.5 seconds 
} 