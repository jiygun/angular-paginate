export class PaginationVeriableModel{
    private _activePageList:Array<number>;
    private _firsPage:number;
    private _lastPage:number;
    private _isFirstSectionVisible:boolean;
    private _isLastSectionVisible:boolean;
    private _activePage:number;
    private _isPaginationVisible:boolean;
    constructor(activePageList:Array<number>,firstPage:number,lastPage:number,activePage:number,
        isFirstSectionVisible:boolean,isLastSectionVisible:boolean,isPaginationVisible:boolean){
            this._activePageList=activePageList;
            this._firsPage=firstPage;
            this._lastPage=lastPage;
            this._activePage=activePage;
            this._isFirstSectionVisible=isFirstSectionVisible;
            this._isLastSectionVisible=isLastSectionVisible;
            this._isPaginationVisible=isPaginationVisible;
    }
    get activePageList():Array<number>{
        return this._activePageList;
    }
    get firstPage():number{
        return this._firsPage;
    }
    get lastPage():number{
        return this._lastPage;
    }
    get activePage():number{
        return this._activePage;
    }
    get isFirstSectionVisible():boolean{
        return this._isFirstSectionVisible;
    }
    get isLastSectionVisible():boolean{
        return this._isLastSectionVisible;
    }
    get isPaginationVisible():boolean{
        return this._isPaginationVisible;
    }
}