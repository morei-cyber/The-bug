export function GET(){
  return Response.json({
    ok:true,
    aiConfigured:Boolean(process.env.OPENAI_API_KEY),
    model:process.env.AI_MODEL || 'gpt-5.6-sol'
  }, {headers:{'cache-control':'no-store'}});
}
