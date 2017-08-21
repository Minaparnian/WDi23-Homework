require 'pry'


# instead of a variable we are storing our data as a hast that RETRUNS from a method. This will allow us to. If we jsut stored this as a variable, we would need to find a way to reset it every time we call our nucleotides_count. We solve this by getting a fresh "instance" of the data everytime we need.
def nucleotides
{
  A: 0,
  C: 0,
  G: 0,
  T: 0,
  X: 0,
  E: 0,
  I: 0
}
end

def nucleotides_count word

  word = word.upcase.split('')
  n = nucleotides  # here is where we get our fresh "instance" of the hash we are stating from
  word.each do | letter |

    n.each do | key, value |

      if key.to_s == letter
        n[key]+=1

      end
    end

  end
  n  # need to state this last so it RETURNS implicitly from our mehtod
end


 puts nucleotides_count "ACGTTCGTTHCCTEETSCNTHHHSS"
 puts nucleotides_count "Anlsdkfhdvbnewlvldkghldskhvlahlmdsv"
 puts nucleotides_count "Anlsdkfhdvbnewlvldkghldskhvlahlmdsv"
 puts nucleotides_count "Anlsdkfhdvbnewlvlddjhfksdjfhksdfkghldskhvlahlmdsv"
 puts nucleotides_count "Anlsdkfhdvbnewlvldkghldskhvlahlmdsv"
 puts nucleotides_count "opopkvdkvksd"
