import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PlaceComponent } from "./place/place.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", component: PlaceComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}