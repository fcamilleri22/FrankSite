define(["app/components/DisplayGrid", "app/components/PageTitle", "app/components/ParagraphSection",
    "app/util/HTMLFragmentBuilder", "app/styledComponents/HomePageDisplayGrid", "app/components/Footer"],
function(DisplayGrid, PageTitle, ParagraphSection, h, HomePageDisplayGrid, Footer){

    document.body.style.margin = "0px";
    document.body.style["font-size"] = "20px";
    document.body.style["background-color"] = "#2A2A2A";

    const titleContainer = h.div({"style":{"background-color":"#222222"}});
    const title = new PageTitle("Frank Camilleri","Full Stack Web Engineer, DevOps Professional", titleContainer);

    const paragraphContainer = h.div({"style":{"background-color":"#2A2A2A"}});
    const paragraph = new ParagraphSection(paragraphContainer);
    paragraph.addContent(
        `I am an <b><em>enthusiastic, passionate, and diligent</b></em> engineer with a <u><b><em>proven</u></b></em>
        ability to bring people together, orchestrate work for an <b><em>optimal return on your investment</b></em>,
        and ultimately, get your <b><em>ideas to market.</b></em>`,
        "Don't just bring in any 'computer guy' from the backwoods of the internet..."
    );
    paragraph.addContent(
        `I prefer to solve technology problems from a <b><em>holistic and generalized</b></em> point of view, whether it's a shoddily
        performing back end/API, a janky front end experience, a discombobulated database schema, suboptimal hardware/cloud
        configurations, <b><em>or a complete lack of any technology stack whatsoever.</b></em>`
    );
    paragraph.addContent(
        `With my ability to <b><em>organize and automate</b></em> vital development processes such as deployment and testing,
        I can even help <b><em>clear up costly bottlenecks</b></em> in your team's workflow that <b><em>hinder your
        organization's ability</b></em> to release new functionality quickly, preventing your team from resorting
        to risky heroics, technical debt inducing hacks, and demoralizing long hours <b><em>to accomplish your business goals.</b></em></p>`
    );


    const gridContainer = h.div({"style":{"background-color":"#222222"}});
    const grid = new HomePageDisplayGrid(gridContainer, "What I can do for your organization: ");
    const footerContainer = h.div({"style":{"background-color":"#2A2A2A"}});
    const footer = new Footer("Need me?<br> Let's get in touch.", footerContainer);
    Promise.all([title.render(), grid.render(), paragraph.render()], footer.render()).then(()=>{
        let frag = document.createDocumentFragment();
        frag.appendChild(titleContainer);
        frag.appendChild(paragraphContainer);
        frag.appendChild(gridContainer);
        frag.appendChild(footerContainer);
        document.body.appendChild(frag);
    });
});
