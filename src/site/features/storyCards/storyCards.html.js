export const storyCardsTemplate = `
<!-- This html MIGHT just need to have five parents... aka directive  -->
<!-- # begin card - we want landscape-->
<h1>Story Cards Class</h1>
<div class="card">
  <!-- <img src="https://www.rodmanford.com/inventoryphotos/5100/1fa6p8jz3k5550841/ip/1.jpg?height=400" class="card-img-top" alt="..."> -->
  <div>
    {{$parent.story.title}}
  </div>
  <div class="card-body">

    <div class="d-flex flex-row justify-content-between">
      <h5 class="card-title">{{story.date.toDateString()}}</h5>
      <em><a ui-sref="home.{{story.category}}">{{story.category}}</a></em>
    </div>
    <hr>
    <p class="card-text">{{story.snippet}}</p>
    <button class="btn btn-outline-primary">Read More</button>
  </div>
</div>
<!-- # end card -->
<br><br><br>
`;
