<?php

use App\Http\Controllers\Admin\ChangeStatusController;
use App\Http\Controllers\Admin\Courses\CourseLanguageController;
use App\Http\Controllers\Admin\DeleteItemController;
use App\Http\Controllers\Admin\Lessons\LessonController;
use App\Http\Controllers\Admin\Project\ProjectController;
use App\Http\Controllers\Admin\Tasks\TaskController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\Users\OpenCourseLanguageForStudentController;
use App\Http\Controllers\Admin\Users\OpenNextLessonController;
use App\Http\Controllers\Admin\Users\StudentInfoController;
use App\Http\Controllers\Admin\Users\StudentIsPresentController;
use App\Http\Controllers\Auth\AuthController;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\dashboard\Analytics;
use App\Http\Controllers\layouts\WithoutMenu;
use App\Http\Controllers\layouts\WithoutNavbar;
use App\Http\Controllers\layouts\Fluid;
use App\Http\Controllers\layouts\Container;
use App\Http\Controllers\layouts\Blank;
use App\Http\Controllers\pages\AccountSettingsAccount;
use App\Http\Controllers\pages\AccountSettingsNotifications;
use App\Http\Controllers\pages\AccountSettingsConnections;
use App\Http\Controllers\pages\MiscError;
use App\Http\Controllers\pages\MiscUnderMaintenance;
use App\Http\Controllers\authentications\LoginBasic;
use App\Http\Controllers\authentications\RegisterBasic;
use App\Http\Controllers\authentications\ForgotPasswordBasic;
use App\Http\Controllers\cards\CardBasic;
use App\Http\Controllers\user_interface\Accordion;
use App\Http\Controllers\user_interface\Alerts;
use App\Http\Controllers\user_interface\Badges;
use App\Http\Controllers\user_interface\Buttons;
use App\Http\Controllers\user_interface\Carousel;
use App\Http\Controllers\user_interface\Collapse;
use App\Http\Controllers\user_interface\Dropdowns;
use App\Http\Controllers\user_interface\Footer;
use App\Http\Controllers\user_interface\ListGroups;
use App\Http\Controllers\user_interface\Modals;
use App\Http\Controllers\user_interface\Navbar;
use App\Http\Controllers\user_interface\Offcanvas;
use App\Http\Controllers\user_interface\PaginationBreadcrumbs;
use App\Http\Controllers\user_interface\Progress;
use App\Http\Controllers\user_interface\Spinners;
use App\Http\Controllers\user_interface\TabsPills;
use App\Http\Controllers\user_interface\Toasts;
use App\Http\Controllers\user_interface\TooltipsPopovers;
use App\Http\Controllers\user_interface\Typography;
use App\Http\Controllers\extended_ui\PerfectScrollbar;
use App\Http\Controllers\extended_ui\TextDivider;
use App\Http\Controllers\icons\Boxicons;
use App\Http\Controllers\form_elements\BasicInput;
use App\Http\Controllers\form_elements\InputGroups;
use App\Http\Controllers\form_layouts\VerticalForm;
use App\Http\Controllers\form_layouts\HorizontalForm;
use App\Http\Controllers\tables\Basic as TablesBasic;


// authentication
Route::get('/auth/login-basic', [LoginBasic::class, 'index'])->name('auth-login-basic');
// Route::get('/auth/register-basic', [RegisterBasic::class, 'index'])->name('auth-register-basic');
// Route::get('/auth/forgot-password-basic', [ForgotPasswordBasic::class, 'index'])->name('auth-reset-password-basic');
Auth::routes(['register' => false, 'verify' => false]);

// Route::post('/web/login-check', [AuthController::class, 'login'])->name('web-login-check');

Route::group(['middleware' => ['auth']], function () {
  // Main Page Route
  Route::get('/', [Analytics::class, 'index'])->name('dashboard-analytics');
  // Route::resource('roles', RoleController::class);
  Route::resource('users', UserController::class);

  // pages
  Route::get('/pages/account-settings-account', [AccountSettingsAccount::class, 'index'])->name('pages-account-settings-account');
  Route::get('/pages/account-settings-notifications', [AccountSettingsNotifications::class, 'index'])->name('pages-account-settings-notifications');
  Route::get('/pages/account-settings-connections', [AccountSettingsConnections::class, 'index'])->name('pages-account-settings-connections');

  // cards
  Route::get('/cards/basic', [CardBasic::class, 'index'])->name('cards-basic');

  // User Interface
  Route::get('/ui/accordion', [Accordion::class, 'index'])->name('ui-accordion');
  Route::get('/ui/alerts', [Alerts::class, 'index'])->name('ui-alerts');
  Route::get('/ui/badges', [Badges::class, 'index'])->name('ui-badges');
  Route::get('/ui/buttons', [Buttons::class, 'index'])->name('ui-buttons');
  Route::get('/ui/carousel', [Carousel::class, 'index'])->name('ui-carousel');
  Route::get('/ui/collapse', [Collapse::class, 'index'])->name('ui-collapse');
  Route::get('/ui/dropdowns', [Dropdowns::class, 'index'])->name('ui-dropdowns');
  Route::get('/ui/footer', [Footer::class, 'index'])->name('ui-footer');
  Route::get('/ui/list-groups', [ListGroups::class, 'index'])->name('ui-list-groups');
  Route::get('/ui/modals', [Modals::class, 'index'])->name('ui-modals');
  Route::get('/ui/navbar', [Navbar::class, 'index'])->name('ui-navbar');
  Route::get('/ui/offcanvas', [Offcanvas::class, 'index'])->name('ui-offcanvas');
  Route::get('/ui/pagination-breadcrumbs', [PaginationBreadcrumbs::class, 'index'])->name('ui-pagination-breadcrumbs');
  Route::get('/ui/progress', [Progress::class, 'index'])->name('ui-progress');
  Route::get('/ui/spinners', [Spinners::class, 'index'])->name('ui-spinners');
  Route::get('/ui/tabs-pills', [TabsPills::class, 'index'])->name('ui-tabs-pills');
  Route::get('/ui/toasts', [Toasts::class, 'index'])->name('ui-toasts');
  Route::get('/ui/tooltips-popovers', [TooltipsPopovers::class, 'index'])->name('ui-tooltips-popovers');
  Route::get('/ui/typography', [Typography::class, 'index'])->name('ui-typography');

  // extended ui
  Route::get('/extended/ui-perfect-scrollbar', [PerfectScrollbar::class, 'index'])->name('extended-ui-perfect-scrollbar');
  Route::get('/extended/ui-text-divider', [TextDivider::class, 'index'])->name('extended-ui-text-divider');

  // icons
  Route::get('/icons/boxicons', [Boxicons::class, 'index'])->name('icons-boxicons');

  // form elements
  Route::get('/forms/basic-inputs', [BasicInput::class, 'index'])->name('forms-basic-inputs');
  Route::get('/forms/input-groups', [InputGroups::class, 'index'])->name('forms-input-groups');

  // form layouts
  Route::get('/form/layouts-vertical', [VerticalForm::class, 'index'])->name('form-layouts-vertical');
  Route::get('/form/layouts-horizontal', [HorizontalForm::class, 'index'])->name('form-layouts-horizontal');

  // tables
  Route::get('/tables/basic', [TablesBasic::class, 'index'])->name('tables-basic');



  // course-language
Route::group(['prefix'=>'course'],function(){
  Route::get('/course-language', [CourseLanguageController::class,'index'])->name('course-language');
  Route::get('/course-language-create', [CourseLanguageController::class,'create'])->name('course-language-create');
  Route::post('/course-language-store', [CourseLanguageController::class,'store'])->name('course-language-store');
  Route::get('/course-language-edit/{id}',[CourseLanguageController::class,'edit'])->name('course-language-edit');
  Route::put('/course-language-update/{id}',[CourseLanguageController::class,'update'])->name('course-language-update');
});

// lessons
Route::group(['prefix'=>'lesson'],function(){
  Route::get('/lesson-list', [LessonController::class,'index'])->name('lesson-list');
  Route::get('/lesson-create', [LessonController::class,'create'])->name('lesson-create');
  Route::post('/lesson-store', [LessonController::class,'store'])->name('lesson-store');
  Route::get('/lesson-edit/{id}', [LessonController::class,'edit'])->name('lesson-edit');
  Route::put('/lesson-update/{id}',[LessonController::class,'update'])->name('lesson-update');
});


//tasks
Route::group(['prefix'=>'task'],function(){
  Route::get('/task-list', [TaskController::class,'index'])->name('task-list');
  Route::get('/task-create', [TaskController::class,'create'])->name('task-create');
  Route::post('/task-store', [TaskController::class,'store'])->name('task-store');
  Route::get('/task-edit/{id}',[TaskController::class,'edit'])->name('task-edit');
  Route::put('/task-update/{id}',[TaskController::class,'update'])->name('task-update');
  Route::put('/task-update/{id}',[TaskController::class,'update'])->name('task-update');
});


Route::post('change-status', [ChangeStatusController::class,'change_status'])->name('change_status');
Route::get('student-is-present/{id}', [StudentIsPresentController::class,'index']);
Route::get('delete-item/{tb_name}/{id}', [DeleteItemController::class,'index']);
Route::get('srudent-info/{id}', [StudentInfoController::class,'index'])->name('users.info');
Route::post('open-course/{user_id}', [OpenCourseLanguageForStudentController::class,'index'])->name('open_course');
Route::post('open-next-lesson', [OpenNextLessonController::class,'index']);



//Project
Route::group(['prefix' => 'project'], function () {
  Route::get('/', [ProjectController::class, 'index'])->name('project');
  Route::get('/create', [ProjectController::class, 'create'])->name('create-project');
  Route::post('/add-project', [ProjectController::class, 'addProject'])->name('project.add');

});
Route::get('get-file', [FileUploadService::class, 'get_file'])->name('get-file');
Route::post('video-upload', [FileUploadService::class, 'videoUpload'])->name('video-upload');
});

