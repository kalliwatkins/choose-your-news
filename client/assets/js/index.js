let = topicData = [{
    id: 1,
    name: "Politics"
},
{
    id: 2,
    name: "Enviornment"
},
{
    id: 3,
    name: "Sports"
},
{
    id: 4,
    name: "Entertainment"
    }];

let lastId = 4;

renderTopics = () => {
    const topicContainer = document.querySelector(".topic-container");
    const topics = createTopics(topicData);

    while (topicContainer.firstChild) {
        topicContainer.removeChild(topicContainer.firstChild);
    }

    topicContainer.appendChild(topics);
}

createTopics = (topicData) => {
    const fragment = document.createDocumentFragment();

    topicData.forEach((data => {
        const topic = createTopic(data);
        fragment.appendChild(topic);
    }));
    return fragment;
}



document.querySelector("#submit-topic").addEventListener("click");