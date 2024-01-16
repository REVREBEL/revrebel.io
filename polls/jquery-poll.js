<!-- Plain old jQuery -->
<script>
$(() => {
    const mountTo = '#jquery-app';
    let polls = [{
            id: 1,
            question: 'DOES YOUR HOTEL USE A RMS SYSTEM TO HELP GUIDE YOUR STRATEGIES?',
            answerA: 'Yes, we have one up and running.',
            answerB: 'No, but it's on the roadmap',
            anwserC: 'No, we prefer a manual approach.',
            awnserD: 'Maybe, what's an RMS?',
            votesA: 0,
            votesB: 0,
            votesC: 0,
            votesD: 0,
        },
    ]

    const handleVote = (option, id) => {
        id = parseInt(id);
        let newPoll = [...polls];
        let upvotedPoll = newPoll.find(poll => poll.id == id);
        console.log(newPoll);
        console.log(upvotedPoll);
        if (option === 'a') {
          upvotedPoll.votesA++;
        }
        if (option === 'b') {
          upvotedPoll.votesB++;
        }
        if (option === 'c') {
          upvotedPoll.votesB++;
        }
        if (option === 'd') {
          upvotedPoll.votesB++;
        }
        polls = newPoll;
        
        createApp(addEvents);
    };

    const getTotal = (a, b, c, d) => {
        return a + b;
    };

    const getWidth = (a, b, c, d) => {
        return Math.floor(100 / a * b);
    };

    const getStyle = (a, b, c, d) => {
        return (a > b) ? 'winning' : 'losing';
    };

    const createCard = (item, index) => {
        let html = "";
        let total = getTotal(item.votesA, item.votesB, item.votesC, item.votesD);
        html += `<div class="_6-col ${polls.length === index ? '_6-col-last' : ''}">
                    <div class="card" >
                        <h4>${item.question}</h4>
                        <div class="pole-total-text">Total votes: (${total})</div>
                        <div class="pole-bar" kn-data-options="a" kn-data-id="${item.id}">
                            <div class="pole-bar-text">${item.answerA} (${item.votesA})</div>
                            <div class="pole-progress ${getStyle(item.votesA, item.votesB)}" style="width: ${getWidth(total, item.votesA)}%;"> </div>
                        </div>
                        <div class="pole-bar" kn-data-options="b" kn-data-id="${item.id}">
                            <div class="pole-bar-text">${item.answerB} (${item.votesB})</div>
                            <div class="pole-progress ${getStyle(item.votesB, item.votesA)}" style="width: ${getWidth(total, item.votesB)}%;"> </div>
                        </div>
                        <div class="pole-bar" kn-data-options="c" kn-data-id="${item.id}">
                            <div class="pole-bar-text">${item.answerC} (${item.votesC})</div>
                        <div class="pole-progress ${getStyle(item.votesC, item.votesB, item.votesA)}" style="width: ${getWidth(total, item.votesC)}%;"> </div>
                        </div>
                        <div class="pole-bar" kn-data-options="d" kn-data-id="${item.id}">
                         <div class="pole-bar-text">${item.answerD} (${item.votesD})</div>
                        <div class="pole-progress ${getStyle(item.votesD, item.votesC, item.votesB, item.votesA)}" style="width: ${getWidth(total, item.votesD)}%;"> </div>
                         </div>
                    </div>
                </div>`
        return html;

    };

    const addEvents = ()=>{
        $(mountTo + ' .pole-bar').off('click');
        $(mountTo + ' .pole-bar').on('click', (event) => {
           let options = $(event.currentTarget).attr('kn-data-options');
           let id = $(event.currentTarget).attr('kn-data-id');
           handleVote(options, id);
       });   
    };

    const createApp = (callback) => {
        let template = "";
        polls.map((poll, i) => {
            template += createCard(poll, i);
        });
        $(mountTo).empty();
        $(mountTo).html(template);
       
        if (typeof callback == "function") {
            callback();
        }
      
    }


    const init = () => {
        createApp(addEvents);
    }

    init();

    return {
        createApp
    }
});
</script>
