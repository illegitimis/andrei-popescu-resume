# andrei-popescu-resume

online resume

## employer template

### bootstrap grid

```htm
<li class="list-group-item" id="employer-li">
<div class="row mx-0 px-0">
<div class="col-7 col-sm-6 order-sm-1 col-md-5 col-lg-4 col-xl-3 px-0">
<span class="my-0"><a href="" target="_blank">employer</a></span>
<div>
<i class="material-icons align-middle">timeline</i>
<small class="text-muted align-middle">[ – ]</small>
</div>
<div>
<i class="material-icons align-middle">code</i>
<small class="text-muted align-text-middle">Position</small>
</div>
<div class="align-items-center">
<i class="material-icons align-middle">perm_identity</i>
<small class="text-muted align-text-middle">collaboration</small>
</div>
</div>

<div class="tag-cloud col-5 col-sm-12 order-sm-3 col-md-12 col-lg-3 col-xl-3 px-0">
<a class="tag" target="_blank" href="https://stackoverflow.com/questions/tagged/c%23">c# 7.1</a>
<a class="tag" target="_blank" href="https://stackoverflow.com/tag/tsql">tsql</a>
</div>

<div class="col-12 col-sm-6 order-sm-2 col-md-7 col-lg-5 col-xl-6 px-0">
<p class="my-0">Paragraph with long text that should be pretty big to reflow. Just add some more. Wonder flex column is better than bootstrap grid? employer template @media ehnaced bootstrap grid</p>
</div>
</div>
</li>
```

### flex row

no-flex-wrap

```htm
<li class="list-group-item" id="employer-li">
<div class="d-inline-flex flex-row align-items-start justify-content-start mx-0 px-0">
    <div class="employer-card order-1 order-sm-1">
    <span class="my-0"><a href="" target="_blank">flex row employer</a></span>
    <div>
    <i class="material-icons align-middle">timeline</i>
    <small class="text-muted align-middle">[ – ]</small>
    </div>
    <div>
    <i class="material-icons align-middle">code</i>
    <small class="text-muted align-text-middle">Position</small>
    </div>
    <div class="align-items-center">
    <i class="material-icons align-middle">perm_identity</i>
    <small class="text-muted align-text-middle">collaboration</small>
    </div>
    </div>

    <!-- flex-fill -->
    <!-- w-100 -->
    <div class="employer-para flex-grow-1 px-0 order-sm-2 order-3">
    <p class="my-0">
    Paragraph with long text that should be pretty big to reflow. Just add some more. Wonder flex column is better than bootstrap grid?
    <b>custom flex row</b>
    </p>
    </div>

    <div class="tag-cloud ml-auto px-0 order-2 order-sm3">
    <a class="tag" target="_blank" href="https://stackoverflow.com/questions/tagged/c%23">c# 7.1</a>
    <a class="tag" target="_blank" href="https://stackoverflow.com/tag/tsql">tsql</a>
    <a class="tag" target="_blank" href="https://stackoverflow.com/questions/tagged/c%23">c#</a>
    <a class="tag" target="_blank" href="https://stackoverflow.com/tag/tsql">sql</a>
    </div>

</div>
</li>
```

### featurette

FEATURETTES

 ```htm
<hr class="featurette-divider" />
<div class="row featurette">
    <div class="col-md-7 order-md-2">
    <h2 class="featurette-heading">Oh yeah, it's that good.
        <span class="text-muted">See for yourself.</span>
    </h2>
    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
    </div>
    <div class="col-md-5 order-md-1">
    <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
    </div>
</div>

<hr class="featurette-divider" />
 ```

 ```scss
 /* Featurettes */

.featurette-divider {
  /* Space out the Bootstrap <hr> more */
  margin: 1px 0;
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 100;
  line-height: 1;
  letter-spacing: -0.05rem;
}

@media (min-width: $screen-sm) {
  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: $screen-md) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
 ```

bootstrap grid
col-7 col-sm-6 order-sm-1 col-md-5 col-lg-4 col-xl-3 px-0
col-5 col-sm-12 order-sm-3 col-md-12 col-lg-2 col-xl-2 px-0
col-12 col-sm-6 order-sm-2 col-md-7 col-lg-6 col-xl-7 px-0