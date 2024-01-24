<?php

use App\Http\Controllers\Admin\Project\ProjectController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\HomeController;
use App\Http\Controllers\API\Courses\CourseLanguagesController;
use App\Http\Controllers\API\ForgotPasswordController;
use App\Http\Controllers\API\Lessons\LessonController;
use App\Http\Controllers\API\SendOrderController;
use App\Http\Controllers\API\TrialCourseController;
use App\Http\Controllers\API\Lessons\UserCurrentLessonController;
use App\Http\Controllers\API\Student\DashboardController;
use App\Http\Controllers\API\Student\VisitHistoryController;
use App\Http\Controllers\API\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['api', 'setlang']], function ($router) {

    Route::group(['prefix' => 'auth'], function ($router) {
        Route::post('login', [AuthController::class, 'login']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('signup', [AuthController::class, 'signup']);
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::post('check-verify-token', [AuthController::class, 'checkVerifyToken']);
        Route::get('me', [AuthController::class, 'me']);
    });

    Route::group(['middleware' => 'apiAuthCheck'], function ($router) {
        Route::get('course-language',[CourseLanguagesController::class,'index']);
        Route::get('language-lessons/{id}',[LessonController::class,'languageLessons']);
        Route::get('user-current-lesson/',[UserCurrentLessonController::class,'index']);

        Route::group(['prefix' => 'user'], function ($router) {
            Route::post('edit', [UserController::class, 'login']);
    
        });


    });

    Route::group(['prefix' => 'project'], function ($router) {
        Route::get('getProject', [ProjectController::class, 'getProject']);
    });

    Route::post('forgot-password', [ForgotPasswordController::class, 'sendResetLink']);
    Route::post('check-forgot-token', [ForgotPasswordController::class, 'checkForgotToken']);
    Route::post('send-new-password', [ForgotPasswordController::class, 'sendNewPassword']);
    Route::post('trial-course', [TrialCourseController::class, 'trialCourse']);
    Route::post('send-order', SendOrderController::class);
    


    Route::get('dashboard',[DashboardController::class,'index']);
    Route::get('home',[HomeController::class,'home']);
    Route::get('visit-history',[VisitHistoryController::class,'index']);


});
