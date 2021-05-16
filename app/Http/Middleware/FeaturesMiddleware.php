<?php

namespace App\Http\Middleware;

use App\Models\Feature;
use Closure;
use Illuminate\Http\Request;

class FeaturesMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
         // return response()->json($request->user()->hasRole('user'));
        $feature = Feature::where('name',ucfirst($request->route()->getName()))->value('active');
        if (!$feature && $request->user()->hasRole('user'))
            return response()->json("module est désactiver",403);

        return $next($request);
    }
}
