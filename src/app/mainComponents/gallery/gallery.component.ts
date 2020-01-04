import { Component, OnChanges, Input } from "@angular/core";
import { DepartmentsService } from "src/app/services/departments.service";
import { PhotoAlbumsService } from 'src/app/services/photo-albums.service';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {


    constructor(public photoAlbumsService: PhotoAlbumsService, public departmentService: DepartmentsService) {

    }

    deptData;
    deptNames;
    titleOfAlbums;
    deptIDs;
    deptID = null;
    page = 1;
    numOfPages;
    previousState;
    nextState;
    images;
    deptClickedFromSideBar = false;

    ngOnInit() {
        this.deptClickedFromSideBar = false;
        this.titleOfAlbums = "Committee departments";

        /////// get Departments to show thier names in side bar ///////////
        this.departmentService.getAllDepartments().subscribe(
            res => {
                this.deptData = res;
                console.log(res);
                this.deptNames = this.deptData.map(({ nameEn }) => nameEn)
                console.log(this.deptNames);
                this.deptIDs = this.deptData.map(function (a) { return a["_id"]; });
                console.log(this.deptIDs);

            },
            err => {
                console.log(err);
            }
        );

        ////////////////// get latest photo albums for all departments //////////////
        this.photoAlbumsService.getPhotoAlbums(this.deptClickedFromSideBar, this.deptID, this.page).subscribe(
            res => {
                this.previousState = false;
                console.log(res);
                let resSTR = JSON.stringify(res);
                let resJSON = JSON.parse(resSTR);
                this.numOfPages = resJSON.pagination.numberOfPages;
                if (resJSON.pagination.numberOfPages > 1) {
                    this.nextState = true;
                }
                else {
                    this.nextState = false;
                }
                console.log(resJSON.pagination.numberOfPages);

                this.images = resJSON.data[0].images;
            },
            err => {
                console.log(err);
            }
        );

    }
    ngOnChanges() {
    }

    goToNextPage() {

        this.page += 1;
        this.photoAlbumsService.getPhotoAlbums(this.deptClickedFromSideBar, this.deptID, this.page).subscribe(
            res => {
                console.log(res);
                let resSTR = JSON.stringify(res);
                let resJSON = JSON.parse(resSTR);
                this.nextState = resJSON.pagination.nextState;
                this.previousState = resJSON.pagination.previousState;
                this.numOfPages = resJSON.pagination.numberOfPages;
                console.log(resJSON.pagination.numberOfPages);
                this.images = resJSON.data[0].images;
            },
            err => {
                console.log(err);
            }
        );

    }

    goToPreviousPage() {

        this.page -= 1;
        this.photoAlbumsService.getPhotoAlbums(this.deptClickedFromSideBar, this.deptID, this.page).subscribe(
            res => {
                console.log(res);
                let resSTR = JSON.stringify(res);
                let resJSON = JSON.parse(resSTR);
                this.nextState = resJSON.pagination.nextState;
                this.previousState = resJSON.pagination.previousState;
                this.numOfPages = resJSON.pagination.numberOfPages;
                console.log(resJSON.pagination.numberOfPages);
                this.images = resJSON.data[0].images;
            },
            err => {
                console.log(err);
            }
        );

    }

    getImagesByDeptID(deptID) {

        this.deptClickedFromSideBar = true;
        this.deptID = deptID;
        this.page = 1;        
        this.photoAlbumsService.getPhotoAlbums(this.deptClickedFromSideBar, this.deptID, this.page).subscribe(
            res => {
                console.log(res);
                let resSTR = JSON.stringify(res);
                let resJSON = JSON.parse(resSTR);
                this.nextState = resJSON.pagination.nextState;
                this.previousState = resJSON.pagination.previousState;
                this.numOfPages = resJSON.pagination.numberOfPages;
                if (resJSON.data.length) {
                    this.images = resJSON.data[0].images;
                    console.log(this.images);
                }
                else {
                    this.images = null;
                }
                console.log(resJSON.pagination.numberOfPages);
            },
            err => {
                console.log(err);
            }
        );

    }


    /////////////////get dept. name to change title of albums for each clicked dept.////////
    putDeptNameInTitle(deptName){
        this.titleOfAlbums = deptName;      
    }

}
