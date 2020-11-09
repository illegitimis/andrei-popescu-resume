# featurettes

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