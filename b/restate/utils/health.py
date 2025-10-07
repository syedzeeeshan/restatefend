from django.http import JsonResponse

def health_view(request):
    """
    A simple view that returns a 200 OK response.
    """
    return JsonResponse({"status": "ok"})
