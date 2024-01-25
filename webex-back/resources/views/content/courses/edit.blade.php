@extends('layouts/contentNavbarLayout')

@section('title', ' Horizontal Layouts - Forms')
@section('page-script')
<script src="{{ asset('assets/js/delete-file.js') }}"></script>
@endsection

@section('content')
<h4 class="py-3 mb-4">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="javascript:void(0);">Языки программирования</a>
            </li>
            <li class="breadcrumb-item active">Список</li>
        </ol>
    </nav>
</h4>
<!-- Basic Layout & Basic with Icons -->
<div class="row">
    <!-- Basic Layout -->
    <div class="col-xxl">
        <div class="card mb-4">

            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="card-header"> Добавить новый язык программирования</h5>
                </div>
            </div>

            <div class="card-body">
                <form action="{{route('course-language-update',$course_language->id)}}" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="d-flex align-items-start">
                        <label for="logo" class="col-md-2 col-form-label">Логотип</label>

                        <img src="{{route('get-file',['path'=>$course_language->logo])}}" alt="user-avatar" class="d-block rounded" height="100" width="100" id="uploadedFile" >

                        <div class="button-wrapper my-3 mx-3">
                            <label for="upload" class="btn btn-primary me-2 mb-4" tabindex="0">
                                <span class="d-none d-sm-block">Загрузить логотип</span>

                                <i class="bx bx-upload d-block d-sm-none"></i>
                                <input type="file" id="upload" class="upload-file-input" hidden="" name="upload_file">
                            </label>
                            <button type="button" class="btn btn-outline-secondary file-reset mb-4">
                                <i class="bx bx-reset d-block d-sm-none"></i>
                                <span class="d-none d-sm-block">Удалить</span>

                            </button>

                            <p class="text-muted mb-0">Разрешены JPG, GIF или PNG. Максимальный размер: 800 КБ.</p>

                        </div>
                    </div>
                    @error('upload_file')

                    <div class="mb-3 row justify-content-end">
                        <div class="col-sm-10 text-danger fts-14">{{$message}}
                        </div>
                    </div>
                    @enderror



                    <div class="mb-3 row">
                        <label for="name" class="col-md-2 col-form-label">Названия</label>
                        <div class="col-md-10">
                            <input class="form-control" type="text" placeholder="Названия" id="name" name="name" value="{{ $course_language->name? $course_language->name: old('name')}}">

                        </div>
                    </div>
                    @error('name')
                    <div class="mb-3 row justify-content-end">
                        <div class="col-sm-10 text-danger fts-14">{{$message}}
                        </div>
                    </div>
                    @enderror
                    @foreach (languages() as $lang)
                    {{-- {{dd($lang)}} --}}
                    <div class="mb-3 row">
                        <label for="description-{{$lang}}" class="col-md-2 col-form-label">Описания {{$lang}}</label>

                        <div class="col-md-10">
                            <textarea class="form-control" placeholder="Описания" id="description-{{$lang}}" name="translate[{{$lang}}][description]">
                              {{$course_language->translation($lang)->description? $course_language->translation($lang)->description : old("translate.$lang.description")}}
                            </textarea>
                        </div>
                    </div>
                    @error("translate.$lang.description")

                    <div class="mb-3 row justify-content-end">
                        <div class="col-sm-10 text-danger fts-14">{{$message}}
                        </div>
                    </div>
                    @enderror

                    @endforeach


                  <div class="row justify-content-end mt-3">
                      <div class="col-sm-10">
                          <button type="submit" class="btn btn-primary">Добавить</button>
                      </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
