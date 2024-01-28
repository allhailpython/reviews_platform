from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from core.reviews import views as review_views

from . import views

router = routers.DefaultRouter()
router.register(r"users", review_views.UserViewSet)
router.register(r"groups", review_views.GroupViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("home/", views.home_view, name="home"),
    path("", include(router.urls)),
    path("api-auth", include("rest_framework.urls", namespace="rest_framework")),
]

if settings.DEBUG:
    # for local developoment only
    from django.conf.urls.static import static

    urlpatterns += static(
        settings.STATIC_URL,
        document_root=settings.STATIC_ROOT,
    )
