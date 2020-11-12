# card

> accordion card for work experience

- header id `id-ch-we` labels `acc-card-we`
- accordion is parent of `acc-card-we`
- card body is direct descendant of `acc-card-we`

```html
<div class="card card-work-experience" aria-details="work experience">
    <div class="card-header" id="id-ch-we" data-toggle="collapse" data-target="#acc-card-we">
    <button class="btn btn-link" data-toggle="collapse" data-target="#acc-card-we" aria-expanded="true" aria-controls="acc-card-we">
        Work experience
        <small> | ?</small>
    </button>
    <i class="fas fa-mug-hot"></i>
    </div>
    <div id="acc-card-we" class="collapse show fade instaFade" data-parent="#accordion" aria-labelledby="id-ch-we">
    <div class="card-body" id="id-card-body-we">
        <div class="mb-1 pb-1 row">
        <div class="col-8 col-md-3 col-xl-auto" aria-details="QS @ EvoGps highlights"></div>
        <div class="col-4 col-md-3 col-xl-auto d-flex flex-column" aria-details="QS & EvoGps badges"></div>
        <div class="tags col-12 col-md-6 col-xl-3 d-flex flex-row align-items-start align-content-start flex-wrap"></div>
        <div class="col-12 col-xl-6" aria-details="Evo description">
            <p class="my-1 font-weight-normal">para normal</p>
        </div>
        </div>
    </div>
    </div>
</div>
```