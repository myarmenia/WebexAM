@extends('layouts/contentNavbarLayout')

@section('title', 'Account settings - Account')
@section('page-script')
    <script src="{{ asset('assets/js/admin\project\project-upload-photo.js') }}"></script>
@endsection

@section('page-style')
    <link rel="stylesheet" href="{{ asset('assets/css/admin/project/project.css') }}">
@endsection

@section('content')

    <h4 class="py-3 mb-4">
        <span class="text-muted fw-light">Новости /</span> Создать нового новость
    </h4>
    <div class="card">

        <div class="d-flex justify-content-between align-items-center">
            <div>
                <h5 class="card-header">Создать новость</h5>
            </div>

        </div>
        <div class="card-body">

            <form action="{{ route('news-create') }}" method="post" enctype="multipart/form-data">
                @foreach (languages() as $lang)
                    <div class="mb-3 row">
                        <label for="lang-{{ $lang }}" class="col-md-2 col-form-label">Заголовок
                            {{ $lang }}</label>

                        <div class="col-md-10">
                            <input class="form-control" placeholder="Заголовок"
                                value="{{ old("title.$lang") }}" id="title-{{ $lang }}"
                                name="title[{{ $lang }}]" />
                        </div>
                    </div>
                    @error("title.$lang")
                        <div class="mb-3 row justify-content-end">
                            <div class="col-sm-10 text-danger fts-14">{{ $message }}
                            </div>
                        </div>
                    @enderror
                @endforeach

                @foreach (languages() as $lang)
                    <div class="mb-3 row">
                        <label for="description-{{ $lang }}" class="col-md-2 col-form-label">Названия
                            {{ $lang }}</label>

                        <div class="col-md-10">
                            <input class="form-control" placeholder="Названия"
                                value="{{ old("description.$lang") }}" id="description-{{ $lang }}"
                                name="description[{{ $lang }}]" />
                        </div>
                    </div>
                    @error("description.$lang")
                        <div class="mb-3 row justify-content-end">
                            <div class="col-sm-10 text-danger fts-14">{{ $message }}
                            </div>
                        </div>
                    @enderror
                @endforeach

                <div class="mb-3 row">
                    <label for="link_play_market" class="col-md-2 col-form-label">Тип проекта</label>
                    <div class="col-md-10">
                        <select id="defaultSelect" name="category" class="form-select">
                            <option>Выберите тип проекта</option>
                            @foreach ($categoryList as $category)
                                <option value="{{ $category['id'] }}">{{ $category['translations'] }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                @error('category')
                    <div class="mb-3 row justify-content-end">
                        <div class="col-sm-10 text-danger fts-14">{{ $message }}
                        </div>
                    </div>
                @enderror


                <div class="mb-3 row">
                    <label for="photo" class="col-md-2 col-form-label">Проект фото</label>
                    <div class="col-md-10">
                        <div class="d-flex flex-wrap align-items-start align-items-sm-center">
                            <label for="upload" class="btn btn-primary me-2 mb-4" tabindex="0">
                                <span class="d-none d-sm-block">Upload new photos</span>
                                <i class="bx bx-upload d-block d-sm-none"></i>
                                <input type="file" id="upload" name="photo" class="account-file-input"
                                    hidden accept="image/png, image/jpeg" />
                            </label>
                            <div class="uploaded-images-container uploaded-photo-project" id="uploadedImagesContainer">
                            </div>

                        </div>
                    </div>
                </div>
                @error('photo')
                    <div class="mb-3 row justify-content-end">
                        <div class="col-sm-10 text-danger fts-14">{{ $message }}
                        </div>
                    </div>
                @enderror


                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Сохранить</button>
                </div>
        </div>

        </form>
    </div>


    </div>


@endsection
