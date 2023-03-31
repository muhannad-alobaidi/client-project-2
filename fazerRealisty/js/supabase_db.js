const { createClient } = supabase
const _supabase = createClient(
    'https://ydbtiearzeoedzkjdvri.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNzYyMzM2LCJleHAiOjE5NTgzMzgzMzZ9.H58Bv1a25Cm6mRQrqD_yLEkv62CdI-DHjDedztq7k7g'
)

/* window.onload = function () {
    document.getElementById('button').addEventListener('click', submitText)
} */
export async function submitText (value) {
    console.log('submit called')

    // Insert a row
      const { data, error } = await _supabase
          .from('Fazer')
          .insert([
              { InputText: value},
          ]);
  
    console.log('submit text')
    console.log(data, error);
    //readText()
  }

  async function readText () {
    const { data, error } = await _supabase
    .from('Fazer')
    .select()

    console.log('read text')
    console.log(data, error);
  }

console.log('Supabase Instance: ', _supabase)